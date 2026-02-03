import { getMenu } from "@/api/getMenu"
import { Category, MenuItem } from "@/src/app/menu/MenuItems"
import { useState, useEffect, useCallback } from "react"

export const useMenu = () => {
  const [menuData, setMenuData] = useState<string[][] | null | undefined>()
  useEffect(() => {
    getMenu().then((m) => setMenuData(m))
  }, [])

  const getCategory = useCallback(
    (category: Category) => {
      const cateringArray = menuData?.filter(
        (innerArray) => innerArray[0] === category,
      )
      const cateringRecords: MenuItem[] = []

      if (!cateringArray) return cateringRecords
      for (let i = 0; i < cateringArray.length; i++) {
        cateringRecords.push({
          item: cateringArray[i][1],
          size: cateringArray[i][2],
          price: cateringArray[i][3],
          notes: cateringArray[i][4],
        })
      }

      return cateringRecords
    },
    [menuData],
  )

  return {
    getCategory,
  }
}
