import React from "react";
import LeftMessagingPanel from "../../components/messaging/LeftPanel";
import CenterMessagingPanel from "../../components/messaging/CenterPanel";
import RightMessagingPanel from "../../components/messaging/RightPanel";

const Messaging = () => {
  return (
    <div className="admin messages">
      <div class="container-fluid messagecenter">
        <LeftMessagingPanel />
        <CenterMessagingPanel />
        <RightMessagingPanel />
      </div>
    </div>
  );
};

export default Messaging;
