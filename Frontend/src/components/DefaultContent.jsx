import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/DefaultContent.module.css'; // Import CSS module

const DefaultContent = () => {
  return (
    <div className={styles.defaultContent}>
      <h2>Welcome to Your Dashboard</h2>
      <p>Explore and manage your data with ease.</p>
      <div className={styles.quickLinks}>
        <Link to="/dashboard/uploadexcel" className={styles.btnPrimary}>Upload Data</Link>
        <Link to="/dashboard/writemessage" className={styles.btnPrimary}>Write Message</Link>
        <Link to="/dashboard/whatsapplogin" className={styles.btnSecondary}>WhatsApp Login</Link>
      </div>
      <div className={styles.dashboardOverview}>
        <h3>Dashboard Overview</h3>
        {/* Add visual elements like charts, graphs, or summary data */}
        <p>View key metrics and insights at a glance.</p>
      </div>
      <div className={styles.recentActivity}>
        <h3>Recent Activity</h3>
        {/* Display recent activity or notifications */}
        <p>No recent activity.</p>
      </div>
      <div className={styles.helpSupport}>
        <h3>Help & Support</h3>
        {/* Include links or resources for help and support */}
        <p>Need assistance? <Link to="/dashboard/support">Contact Support</Link></p>
      </div>
    </div>
  );
};

export default DefaultContent;
