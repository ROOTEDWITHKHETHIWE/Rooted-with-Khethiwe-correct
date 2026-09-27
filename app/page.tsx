import Link from "next/link";

export default function Home() {
  return (
    <main
      className="awake-page"
      style={{
        background: "#f7fbff",
        color: "#24496d",
      }}
    >
      <header
        className="topbar"
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #d3e3f0",
        }}
      >
        <div className="brand">
          <span className="leaf">❧</span>
          <span>MIDWEEK ROOTED</span>
          <span className="leaf">❧</span>
        </div>

        <nav
