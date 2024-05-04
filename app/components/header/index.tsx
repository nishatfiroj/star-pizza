import { pages } from "../../types"

export function Header() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {Object.entries(pages).map((item, index) => (
        <a key={index} href={`./${item[0]}`}>
          {item[1]}
        </a>
      ))}
    </div>
  )
}
