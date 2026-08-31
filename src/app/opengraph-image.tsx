import { ImageResponse } from "next/og";
import { personal } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#08080a",
          backgroundImage:
            "linear-gradient(to right, rgba(245,245,244,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(245,245,244,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#6e7bf2",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: 999, background: "#6e7bf2", display: "flex" }} />
          Full Stack Developer
        </div>
        <div
          style={{
            display: "flex",
            color: "#f2f2f0",
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: -2,
            lineHeight: 1.05,
          }}
        >
          {personal.name}
        </div>
        <div
          style={{
            display: "flex",
            color: "#9a9aa2",
            fontSize: 30,
            marginTop: 26,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          {personal.positioning}
        </div>
      </div>
    ),
    { ...size }
  );
}
