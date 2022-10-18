import React, { useState } from 'react'
import './Widget.css';
import { apps } from '../../data/allApps'
import campminderIcon from '../../assets/icons/campminderIcon.svg'
import slackIcon from '../../assets/icons/slackIcon.svg'
import googleSheetsIcon from '../../assets/icons/googleSheetsIcon.svg'
import googleFormsIcon from '../../assets/icons/googleFormsIcon.svg'
import hubspotIcon from '../../assets/icons/hubspotIcon.svg'
import mailchimpIcon from '../../assets/icons/mailchimpIcon.svg'
import googleDriveIcon from '../../assets/icons/googleDriveIcon.svg'
import googleCalendarIcon from '../../assets/icons/googleCalendarIcon.svg'
import gmailIcon from '../../assets/icons/gmailIcon.svg'
import salesforceIcon from '../../assets/icons/salesforceIcon.svg'
import shopifyIcon from '../../assets/icons/shopifyIcon.svg'

import { config } from '../../config'

export interface AppProps {
  appName: string
}

const allApps = apps.map((r, i) => {
  r.icon = [campminderIcon, slackIcon, googleSheetsIcon, googleFormsIcon, hubspotIcon, mailchimpIcon, googleDriveIcon, googleCalendarIcon, gmailIcon, salesforceIcon, shopifyIcon][i]
  return r
})

const Widget: React.FC<AppProps> = ({ appName }) => {
  const [app,] = useState(allApps.find(a => a.slug === appName))

  const integrateButton = (appType: string) => {
    switch (appType) {
      case 'campminder':
        return integrateWithCampminder()
      default:
        break;
    }
  }

  const integrateWithCampminder = () => {
    window.open(`${config?.appUrl}/campminder`, '', 'width=900, height=700, top=100, left=100')
  }

  return (
    <div className='widget'>
      <div className={`appCard ${appName.length === 0 || !app ? 'shimmer' : ''}`} style={{ backgroundColor: `${app?.primaryColor}` }}>
        <div className='left'>
          <div className='whiteBackground'>
            <img src={app?.icon} className='icon' alt='' />
          </div>
          <div className='textArea'>
            <div className='titleText'>{app?.name}</div>
            <p className='subtitleText'>Powered By <span>champselect.ai</span></p>
          </div>
        </div>
        <div className='right'>
          {app && <button className='integrateButton' type='submit' onClick={() => integrateButton(appName)}>Integrate with {app?.name}</button>}
        </div>
      </div>
    </div>
  )
}

export default Widget