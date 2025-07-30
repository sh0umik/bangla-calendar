import React from "react";
import { useBongabdo, useBongabdoLive } from "../src/react";

function BengaliDateComponent() {
  // Static date with season
  const { formatted, raw, isLoading, error } = useBongabdo("2024-01-15", {
    format: "DD MM, YY (SS)",
    showSeason: true,
  });

  // Live updating date with weekday
  const { formatted: liveDate } = useBongabdoLive({
    format: "DD MM, YY (WW)",
    showWeekDays: true,
  });

  // Today's date in default format
  const { formatted: today } = useBongabdo();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>বঙ্গাব্দ (Bengali Calendar) Examples</h1>

      <div style={{ marginBottom: "20px" }}>
        <h2>Static Date (2024-01-15):</h2>
        <p style={{ fontSize: "18px", color: "#333" }}>{formatted}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Live Date (Updates every second):</h2>
        <p style={{ fontSize: "18px", color: "#0066cc" }}>{liveDate}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Today's Date:</h2>
        <p style={{ fontSize: "18px", color: "#009900" }}>{today}</p>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <h2>Raw Date Object:</h2>
        <pre
          style={{
            backgroundColor: "#f5f5f5",
            padding: "10px",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        >
          {JSON.stringify(raw, null, 2)}
        </pre>
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#e8f4f8",
          borderRadius: "5px",
        }}
      >
        <h3>Format Examples:</h3>
        <ul>
          <li>
            <strong>Default:</strong> DD MM, YY
          </li>
          <li>
            <strong>With Season:</strong> DD MM, YY (SS)
          </li>
          <li>
            <strong>With Weekday:</strong> DD MM, YY (WW)
          </li>
          <li>
            <strong>Custom:</strong> DD-MM-YY
          </li>
          <li>
            <strong>Only Month:</strong> MM
          </li>
          <li>
            <strong>Only Year:</strong> YY
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BengaliDateComponent;
