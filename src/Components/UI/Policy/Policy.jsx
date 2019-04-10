import React, { Component } from 'react';
import Styles from './Policy.scss';

export default class Policy extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <b>Policy</b>
        <p>Like most websites, this website uses cookies/localstorage to collect information. Cookies/LcalStorage are small data files which are placed on your computer or other devices (such as smart ‘phones or ‘tablets’) as you browse this website.  They are used to ‘remember’ when your computer or device accesses our websites.  Cookies are essential for the effective operation of our websites and to help you shop with us online.  They are also used to tailor the products and services offered and advertised to you, both on our websites and elsewhere.</p>

        <b>Information collected</b>
        <p>Some cookies collect information about browsing behaviour when you access this website via the same computer or device.  This includes information about pages viewed, and your journey around a website.  We do not use localstorage to collect or record information on your name, address or other contact details.</p>

        <b>What are cookies used for?</b>
        <p>The main purposes for which cookies are used for technical purposes essential to effective operation of our websites, particularly in relation to on-line transactions and site navigation.</p>
        <b>How do I disable localstorage?</b>
        <p>This will depend on the browser you use.   Further details on how to disable cookies for the most popular browsers are set out below:</p>

        <b>How to clear Web Storage in Internet Explorer:</b>
        <p>Select Tools → Internet Options → General → check "Delete browsing history on exit", click on Delete, check "Cookies", click on Delete once more and then restart your browser for changes to fully take affect. Note: This will remove cookies in addition to Web Storage data, as the browser currently doesn't provide a friendly way to clear Web Storage data without also affecting cookies. </p>
        <b>To enable/disable Web Storage in Internet Explorer:</b>
        <p>Select Extras → Internet Options → Advanced Tab → Go to Security → uncheck "Enable DOM-Storage"</p>
        <b>How to clear Web Storage in Edge:</b>
        <p>Select Settings → Clear browsing data → Choose what to clear → Cookies and saved website data. Note: This will remove cookies in addition to Web Storage data, as the browser currently doesn't provide a friendly way to clear Web Storage data without also affecting cookies. </p>
        <b>How to enable/disable Web Storage in Edge:</b>
        <p>Select Settings → Advanced Settings → Cookies → Block all cookies. Note: This will affect both Web Storage and cookies.</p>
    
        <b>To clear Web Storage in Firefox:</b>
        <p>Select Tools → Clear Recent History, open Details, check "Cookies" and select "Everything" as time range.</p> 
        <p>Note: This will remove cookies in addition to Web Storage data, as the browser currently doesn't provide a friendly way to clear Web Storage data without also affecting cookies. Also note that no other time range other than "Everything" will clear Web Storage. </p>
        <b>To enable/disable Web Storage in Firefox:</b>
        <p>Type about:config in the address bar to view advanced settings. Scroll down to (or search for) dom.storage.enabled, right click on the entry where you can toggle its enabled/disabled state.</p>

        <b>How to clear Web Storage in Chrome:</b>
        <p>Select Tools → Clear browsing data... check "Delete cookies and other site data", select "Everything" from "Clear data from this period" and click the "Clear browsing data" button. Note: This will remove cookies in addition to Web Storage data, as the browser currently doesn't provide a friendly way to clear Web Storage data without also affecting cookies. </p>
        <b>To enable/disable Web Storage in Chrome:</b>
        <p>Open Options and select the "Under the Hood" tab. Click on "Content settings", select "Cookies" and set "Block sites from setting any data". Note: This will affect both Web Storage and cookies.</p>
      
        <b>To clear Web Storage in Safari:</b>
        <p>Select Preferences → Privacy → Manage Website Data... → Remove All. Note: This will remove cookies in addition to Web Storage data, as the browser currently doesn't provide a friendly way to clear Web Storage data without also affecting cookies. </p>
        <b>To enable/disable Web Storage in Safari:</b>
        <p>Select Preferences → Privacy → Cookies and website data → Always block. Note: This will affect both Web Storage and cookies.</p>
  
        <b>To clear Web Storage in Opera:</b>
        <p>Select Settings → Privacy and security → Clear browsing data... check "Cookies and other site data", select "the beginning of time" from the drop-down and click the "Clear browsing data" button. Note: This will remove cookies in addition to Web Storage data, as the browser currently doesn't provide a friendly way to clear Web Storage data without also affecting cookies. </p>
        <b>To enable/disable Web Storage in Opera:</b>
        <p>Select Settings → Privacy and security → Cookies and set "Block sites from setting any data". Note: This will affect both Web Storage and cookies.</p>        
      </section>
    )
  }
}