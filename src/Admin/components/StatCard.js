import React from 'react';

const StatCard = ({ title, value, desc, icon, trend, trendValue, colorTheme = 'green' }) => {
  return (
    <div className="adm-stat-card">
      <div className="adm-stat-header">
        <div className={`adm-stat-icon-wrap adm-stat-icon-wrap--${colorTheme}`}>
          {icon}
        </div>
        {trend && (
          <span className={`adm-stat-trend adm-stat-trend--${trend}`}>
            {trend === 'up' ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            ) : (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            )}
            {trendValue}
          </span>
        )}
      </div>
      <h4 className="adm-stat-title">{title}</h4>
      <div className="adm-stat-value">{value}</div>
      {desc && <p className="adm-stat-desc">{desc}</p>}
    </div>
  );
};

export default StatCard;
