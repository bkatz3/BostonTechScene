export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2a2a2a] bg-surface mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-text-secondary text-sm text-center md:text-left">
            <p className="font-medium text-text-primary mb-1">Boston Tech Scene</p>
            <p>
              Made by{" "}
              <a
                href="https://www.benlkatz.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Ben Katz
              </a>{" "}
              and the{" "}
              <a
                href="https://massaicoalition.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                Mass AI Coalition
              </a>
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-text-secondary">
            <a
              href="mailto:ben@hybrd.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Contribute a resource →
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-[#2a2a2a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-text-secondary/50 text-xs">© {year} BostonTechScene. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
