export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2a2a2a] bg-surface mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-text-secondary text-sm text-center md:text-left">
            <p className="font-medium text-text-primary mb-1">Boston Tech Scene</p>
            <p>
              Built by Ben and the{" "}
              <a
                href="https://projectcommon.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Project Common
              </a>{" "}
              community.
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <span>Last updated {year}</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Contribute →
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
