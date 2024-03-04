import { UserButton } from "@clerk/clerk-react"
import classes from "./Sidebar.module.css"
import {
  Button,
  Center,
  Stack,
  useMantineColorScheme,
  // Image,
  // Stack,
  // Tooltip,
  // UnstyledButton,
  // rem,
  // useMantineColorScheme,
} from "@mantine/core"
import {
  IconArrowsJoin,
  IconMoon,
  // IconMoon,
  IconPlus,
  IconSun,
  // IconSun,
} from "@tabler/icons-react"
import { useModal } from "../../hooks/useModal"
// import { useModal } from "../../hooks/useModal"
// import { useServers } from "../../hooks/graphql/server/useServers"
// import { useNavigate } from "react-router-dom"

// interface NavbarLinkProps {
//   label: string
//   active?: boolean
//   imageUrl: string
//   onClick?: () => void
// }

// function NavbarLink({ imageUrl, label, active, onClick }: NavbarLinkProps) {
//   return (
//     <Tooltip label={label} position="right">
//       <UnstyledButton
//         onClick={onClick}
//         data-active={active || undefined}
//         style={{ borderRadius: rem(100) }}
//       >
//         <Image src={imageUrl} w={rem(50)} h={rem(50)} radius={100} />
//       </UnstyledButton>
//     </Tooltip>
//   )
// }

function Sidebar() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const createServerModal = useModal("CreateServer")
  return (
  
    
    <nav className={classes.navbar}>
      
        <Center>
          <Button
            className={classes.link}
            variant="subtle"
            radius={100}
            onClick={createServerModal.openModal}
          >
            <IconPlus radius={100} />
          </Button>
        </Center>
        <Center>
          <Button
            onClick={()=>{}}
            className={classes.link}
            variant="subtle"
            radius={100}
          >
            <IconArrowsJoin radius={100} />
          </Button>
          </Center>
          
        <Stack justify="center" align="center">
        <Button
          className={classes.link}
          variant="subtle"
          onClick={toggleColorScheme}
          radius={100}
          p={0}
        >
          {colorScheme === "dark" ? (
            <IconMoon radius={100} />
          ) : (
            <IconSun radius={100} />
          )}
        </Button>
        <UserButton />
      </Stack>

     </nav>
          
)
   
}

export default Sidebar 