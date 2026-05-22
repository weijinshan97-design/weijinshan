export function Footer() {
  return (
    <footer className="border-t border-border-light py-10 text-center">
      <div className="max-w-[1200px] mx-auto px-6">
        <p className="text-xs text-muted-light">
          &copy; {new Date().getFullYear()} 魏晋山
        </p>
      </div>
    </footer>
  );
}
