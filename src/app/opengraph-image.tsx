import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/seo"

export const runtime = "edge"
export const alt = "Sreehari E K — Full Stack Developer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d0c0a",
          padding: "72px",
          fontFamily: "sans-serif",
          backgroundImage:
            "radial-gradient(900px 500px at 85% -10%, rgba(222,156,54,0.18), transparent 60%)",
        }}
      >
        {/* Top row — monogram + availability */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 84,
              height: 84,
              borderRadius: 20,
              backgroundColor: "#e6b25c",
              color: "#1a1208",
              fontSize: 48,
              fontWeight: 700,
            }}
          >
            S
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              padding: "12px 22px",
              borderRadius: 999,
              border: "1px solid rgba(255,255,255,0.14)",
              color: "#d8d2c6",
              fontSize: 24,
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                backgroundColor: "#34d399",
              }}
            />
            Open to opportunities
          </div>
        </div>

        {/* Name + role */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 96,
              fontWeight: 700,
              color: "#f4f1ea",
              letterSpacing: "-0.03em",
              lineHeight: 1.02,
            }}
          >
            Sreehari E K
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginTop: 26,
              fontSize: 40,
              color: "#e6b25c",
              fontWeight: 600,
            }}
          >
            <div style={{ width: 56, height: 4, backgroundColor: "#e6b25c" }} />
            Full Stack Developer
          </div>
        </div>

        {/* Bottom row — stack + url */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 26,
            color: "#a59f93",
          }}
        >
          <div style={{ display: "flex" }}>
            React · Next.js · Node.js · MongoDB · React Native
          </div>
          <div style={{ display: "flex", color: "#f4f1ea", fontWeight: 600 }}>
            {siteConfig.url.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
