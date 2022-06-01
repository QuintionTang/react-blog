import React, { useState } from "react";
import AgoraUIKit from "agora-react-uikit";
export default function VideoCall() {
    const [videoCall, setVideoCall] = useState(true);
    const rtcProps = {
        appId: "1366b86aa83d4387baad556df3b47e89",
        channel: "devpoint", // your agora channel
        token: "0061366b86aa83d4387baad556df3b47e89IABJQvb1PmlS2k9Rq+gpdkbc/SVRB4tKZKH2nSAz5mTjuI/48UQAAAAAEADBxArjT8GYYgEAAQBOwZhi", // use null or skip if using app in testing mode
    };
    const callbacks = {
        EndCall: () => setVideoCall(false),
    };

    return videoCall ? (
        <div
            style={{
                display: "flex",
                width: "100%",
                height: "60vh",
            }}
        >
            <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
        </div>
    ) : (
        <h3 onClick={() => setVideoCall(true)}>Start Call</h3>
    );
}
