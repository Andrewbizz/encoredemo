import React, { useEffect, useState } from "react";
import "@/styles/announcement.css";

const SNOOZE_KEY = "popup_snooze_timestamp";
const ONE_HOUR = 3600000;

const AnnouncementPopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastSnoozed = localStorage.getItem(SNOOZE_KEY);
    const now = Date.now();

    // Show if never snoozed OR if 1 hour has passed
    if (!lastSnoozed || now - parseInt(lastSnoozed) > ONE_HOUR) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = (isActionTaken: boolean) => {
    // Save current time to localStorage to start the 1-hour countdown
    localStorage.setItem(SNOOZE_KEY, Date.now().toString());
    setIsVisible(false);
  };

  const handleCloseX = (isActionTaken: boolean) => {
    setIsVisible(false);
  };
  if (!isVisible) return null;

  return (
    <div className="popup-overlay backdrop">
      <div className="cta-box popup-modal">
        <div className="popup-grid">
          {/* Left Column */}
          <div className="popup-section  ">
            <div className="imgAnnounce"></div>
            <div className="icon-header">
              <h2 className="cta-titlex">E-Transfer Reminder</h2>
            </div>
            <p className="cta-subtitlex">
              All e-transfer payments must now be sent to{" "}
              <strong>finance@encoreauctions.ca</strong>.
            </p>

            <div className="btnCont">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => handleClose(true)}
              >
                Learn More
              </button>

              <button
                className="btn btn-outline btn-lg"
                onClick={() => handleCloseX(true)}
              >
                Remind later
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementPopup;
