import * as SolidIcons from "@fortawesome/free-solid-svg-icons"
// import * as RegularIcons from "@fortawesome/free-regular-svg-icons"
// import * as BrandIcons from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function toPascal(str) {
  return str
    .split("-")
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join("")
}

export default function DynamicFA({ name, className }) {
  if (!name) return null

  // ví dụ: "fa-solid fa-timeline"
  let style = "solid"
  let iconName = ""

  const parts = name.split(" ")

  if (parts.length === 2) {
    // "fa-solid fa-timeline"
    style = parts[0].replace("fa-", "")
    iconName = parts[1].replace("fa-", "")
  } else {
    // "fa-timeline" hoặc "timeline"
    iconName = name.replace("fa-", "")
  }

  const iconKey = "fa" + toPascal(iconName)

  let icon
  if (style === "solid") icon = SolidIcons[iconKey]
  if (style === "regular") icon = RegularIcons[iconKey]
  if (style === "brands") icon = BrandIcons[iconKey]

  if (!icon) {
    console.warn("Icon not found:", name, iconKey)
    return null
  }

  return <FontAwesomeIcon icon={icon} className={className} />
}
