function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600"></div>

      <p className="text-sm font-medium text-gray-600">
        Loading, please wait...
      </p>
    </div>
  );
}

export default Loading;
