import { Grid } from "@mui/material"
import Image from "next/image"
import pin from "@/public/location-pin.svg"
import { Paragraph } from "@/src/components"

type HoursRow = {
  label: string
  time: string
}

type LocationCardProps = {
  address: string
  phone: string
  services: string
  intersection: string
  deliveryAreas?: string[]
  hours?: HoursRow[]
}

export const LocationCard = ({
  address,
  phone,
  services,
  intersection,
  deliveryAreas = [],
  hours = [],
}: LocationCardProps) => {
  return (
    <Grid container>
      <Grid size={1}>
        <Image src={pin} alt="Location" />
      </Grid>
      <Grid size={9}>
        <Paragraph fontSize={24}>{address}</Paragraph>
        <Paragraph>{phone}</Paragraph>
        <Paragraph>{services}</Paragraph>
        <Paragraph>{intersection}</Paragraph>
        {deliveryAreas.length > 0 && (
          <Paragraph>
            Delivering to{" "}
            {deliveryAreas.map((area, i) => (
              <b key={area}>
                {area}
                {i < deliveryAreas.length - 1 ? " & " : ""}
              </b>
            ))}
            .
          </Paragraph>
        )}
        <br />
        <Paragraph>
          <b>HOURS</b>
        </Paragraph>
        {hours.map((row, i) => (
          <Paragraph key={`${row.label}-${i}`}>
            {row.label} {row.time}
          </Paragraph>
        ))}
      </Grid>
    </Grid>
  )
}

export const locations: LocationCardProps[] = [
  {
    address: "1000 Marietta Hwy. Off 120",
    phone: "770-650-6717",
    services: "Delivery & Pickup",
    intersection: "The intersection of Marietta Hwy. & Coleman Rd.",
    deliveryAreas: ["East Cobb", "Roswell"],
    hours: [
      { label: "Monday - Thursday", time: "10:30AM - 10:00PM" },
      { label: "Friday - Saturday", time: "11:00AM - 10:30PM" },
      { label: "Sunday", time: "11:30AM - 10PM" },
    ],
  },
  {
    address: "11490 Alpharetta Hwy.",
    phone: "770-667-3000",
    services: "Delivery & Dine-In & Pickup",
    intersection: "The intersection of Hembree Rd. & Alpharetta Hwy.",
    deliveryAreas: ["Roswell", "Alpharetta"],
    hours: [
      { label: "Monday - Thursday", time: "10:30AM - 9:30PM" },
      { label: "Friday - Sunday", time: "11:00AM - 10:00PM" },
    ],
  },
  {
    address: "13753 Marietta Hwy #110",
    phone: "678-880-9167",
    services: "Delivery & Pickup",
    intersection: "The intersection of Marietta Hwy. & Coleman Rd.",
    deliveryAreas: ["Canton"],
    hours: [
      { label: "Monday - Thursday", time: "10:30AM - 10:00PM" },
      { label: "Friday", time: "10:30AM - 10:30PM" },
      { label: "Saturday", time: "11:00AM - 10:30PM" },
      { label: "Sunday", time: "11:30AM - 9:30PM" },
    ],
  },
]
