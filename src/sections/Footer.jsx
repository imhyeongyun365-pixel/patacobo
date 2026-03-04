import React from 'react'
import {
  logoData,
  companyData,
  customerCenterData,
  footerMenus,
  socialLinks,
  footerLegal
} from '../util/footer'

const Footer = () => {
    
  return (
    <footer>

    <div className='inner footer-inner'>
      <div className="left">
        <h3>
          <a href={logoData.href}>
            <img src={logoData.src} alt={logoData.alt} />
          </a>
        </h3>
        <ul className="foot-list-1">
          {/* companyData */}
          {companyData.map((line, i) => (
              <li key={i}>
              {line}
            </li>
          ))}
        </ul>
        <div className="footer-legal">
          <p>{footerLegal.copyright}</p>
          <div className="legal-links">
            {footerLegal.links.map((item, i) => (
                <a href={item.href} key={i}>
                {item.label}
              </a>
            ))}
          </div>

        </div>
      </div>
      <div className="center">
        <div className="foot-menus">
          {footerMenus.map((menu, i) => (
              <div key={i}>
              <h4>{menu.title}</h4>
              <ul>
                {menu.items.map((item, j) => (
                    <li key={j}>
                    <a href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="right"></div>
    </div>
    </footer>
  )
}

export default Footer