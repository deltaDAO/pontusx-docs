export default function Footer() {
  return (
    <footer className="md:w-2xl mx-auto">
      <div className="text-black dark:text-white">
        <div>
          <div className="flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
            <p className="order-2 md:order-1 mt-8 md:mt-0">
              Built by <a className="vocs_Anchor" href="http://delta-dao.com">deltaDAO</a>
            </p>
            <div className="order-1 md:order-2">
              <span className="px-2">
                <a className="vocs_Anchor" href="mailto:contact@delta-dao.com">Contact us</a>
              </span>
              <span className="px-2 border-l">
                <a className="vocs_Anchor" href="/privacy">Privacy Policy</a>
              </span>
              <span className="px-2 border-l">
                <a className="vocs_Anchor" href="http://delta-dao.com/imprint">Imprint</a>
              </span>
              <span className="px-2 border-l">
                <a className="vocs_Anchor" href="https://creativecommons.org/licenses/by-sa/4.0/deed.de">Content License CC BY-SA 4.0</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
