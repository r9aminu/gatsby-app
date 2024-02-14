import React from 'react'; // Import React
import Navigation from './Navigation'; // Import Navigation component
import MyStyles from '../styles/MyStyles'; // Import styles

const Layout = ({ children }) => { // Define Layout component
  return (
    <div style={MyStyles.container}> {/* Container style */}
      <header style={MyStyles.header}> {/* Header style */}
        <Navigation /> {/* Navigation component */}
      </header>
      <main style={MyStyles.main}> {/* Main content style */}
        <div style={MyStyles.pageContent}>{children}</div> {/* Page content style */}
      </main>
      <footer style={MyStyles.footer}>{}</footer> {/* Footer style */}
    </div>
  );
};

export default Layout; // Export Layout component
