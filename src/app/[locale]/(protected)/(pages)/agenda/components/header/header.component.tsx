// Types
import type { HeaderProps } from "./types/header.component.types";
// Components
import { CreateButton } from "./components/create-button/create-button.component";
import { MonthPicker } from "./components/month-picker/month-picker.component";
import { NextButton } from "./components/next-button/next-button.component";
import { PrevButton } from "./components/prev-button/prev-button.component";
import { SearchBar } from "./components/search-bar/search-bar.component";
import { SearchButton } from "./components/search-button/search-button.component";
import { SettingsMenu } from "./components/settings-menu/settings-menu.component";
import { TodayButton } from "./components/today-button/today-button.component";
import { ToggleSidebar } from "./components/toggle-sidebar/toggle-sidebar.component";
import { ViewPicker } from "./components/view-picker/view-picker.component";
import { YearPicker } from "./components/year-picker/year-picker.component";

const Header = ({
  calendarRef,
  openSearchBar,
  setOpenSearchBar,
  setOpenSidebar,
  setShowWeekends,
  setSlotDuration,
  showWeekends,
  slotDuration,
}: HeaderProps) => (
  <div className="relative flex h-14 items-center justify-between px-2 sm:h-16 sm:px-4">
    <div className="flex items-center xl:gap-2">
      <ToggleSidebar {...{ setOpenSidebar }} />
      <MonthPicker {...{ calendarRef }} />
      <YearPicker {...{ calendarRef }} />
    </div>

    <div className="flex items-center xl:gap-2">
      <PrevButton {...{ calendarRef }} />
      <NextButton {...{ calendarRef }} />
      <TodayButton {...{ calendarRef }} />
      <ViewPicker {...{ calendarRef }} />
      <SearchButton {...{ setOpenSearchBar }} />
      <CreateButton />
      <SettingsMenu
        {...{
          calendarRef,
          showWeekends,
          setShowWeekends,
          setSlotDuration,
          slotDuration,
        }}
      />
    </div>

    <SearchBar {...{ openSearchBar, setOpenSearchBar }} />
  </div>
);

export { Header };
