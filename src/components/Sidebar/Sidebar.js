import React, { useState, useEffect, Fragment } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  NotificationsNone as NotificationsIcon,
  FormatSize as TypographyIcon,
  FilterNone as UIElementsIcon,
  BorderAll as TableIcon,
  QuestionAnswer as SupportIcon,
  LibraryBooks as LibraryIcon,
  HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  {
    id: 0,
    label: "Dashboard",
    link: "/app/dashboard",
    icon: <HomeIcon />,
    active: true,
  },
  {
    id: 1,
    label: "Typography",
    link: "/app/typography",
    icon: <TypographyIcon />,
    active: false,
  },
  {
    id: 2,
    label: "Tables",
    link: "/app/tables",
    icon: <TableIcon />,
    active: true,
  },
  {
    id: 3,
    label: "Notifications",
    link: "/app/notifications",
    icon: <NotificationsIcon />,
    active: false,
  },
  {
    id: 4,
    label: "UI Elements",
    link: "/app/ui",
    icon: <UIElementsIcon />,
    active: true,
    children: [
      { id: 5, label: "Icons", link: "/app/ui/icons" },
      { id: 6, label: "Charts", link: "/app/ui/charts" },
      { id: 7, label: "Maps", link: "/app/ui/maps" },
    ],
  },
  { id: 8, type: "divider", active: false },

  { id: 9, type: "title", label: "HELP", active: false },
  { id: 10, label: "Library", link: "", icon: <LibraryIcon />, active: false },
  { id: 11, label: "Support", link: "", icon: <SupportIcon />, active: false },
  { id: 12, label: "FAQ", link: "", icon: <FAQIcon />, active: false },
  { id: 13, type: "divider" },
  { id: 14, type: "title", label: "PROJECTS" },
];

function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <Fragment key={link.id}>
            {link.active && (
              <SidebarLink
                location={location}
                isSidebarOpened={isSidebarOpened}
                {...link}
              />
            )}
          </Fragment>
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
