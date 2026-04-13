"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Spinner from "./Spinner";
import JobCard from "./JobCard";

const LIMIT = 10;

export default function JobsList({ initialJobs, initialHasMore }) {
  const [jobs, setJobs] = useState(initialJobs);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const sentinelRef = useRef(null);
  const offsetRef = useRef(initialJobs.length);
  const loadingRef = useRef(false);

  const loadMore = useCallback(async () => {
    if (loadingRef.current || !hasMore) return;
    loadingRef.current = true;
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/jobs?offset=${offsetRef.current}&limit=${LIMIT}`,
      );
      if (!res.ok) throw new Error("Failed to load more jobs.");
      const data = await res.json();
      setJobs((prev) => [...prev, ...data.jobs]);
      setHasMore(data.hasMore);
      offsetRef.current += data.jobs.length;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  }, [hasMore]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) loadMore();
      },
      { threshold: 0.1 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [loadMore]);

  return (
    <div className="border-t border-white/10 min-h-[80vh]">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 lg:mt-16">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div ref={sentinelRef} className="h-1" />

      {loading && <Spinner />}

      {error && (
        <p className="text-center text-red-400 text-sm py-6">{error}</p>
      )}

      {!hasMore && jobs.length > 0 && (
        <p className="text-center text-gray-600 text-xs py-8 mt-20 tracking-wider uppercase">
          No more positions to display
        </p>
      )}
    </div>
  );
}
