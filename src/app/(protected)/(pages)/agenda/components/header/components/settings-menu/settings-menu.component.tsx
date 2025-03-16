// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// Constants
import { SLOT_DURATIONS, VIEW_ITEMS } from "./contants/settings-menu.constants";
// Hooks
import { SettingsMenuHook } from "./hooks/settings-menu.hook";
// Icons
import {
  Calendar1,
  CalendarClock,
  CalendarCog,
  CalendarPlus,
  Download,
  EllipsisVertical,
} from "lucide-react";
// Types
import type { SettingsMenuProps } from "./types/settings-menu.component.types";

const SettingsMenu = ({
  calendarRef,
  showWeekends,
  setShowWeekends,
  setSlotDuration,
  slotDuration,
}: SettingsMenuProps) => {
  const {
    currentMonth,
    currentYear,
    handleMonthChange,
    handleSlotDurationChange,
    handleViewChange,
    handleYearChange,
    months,
    viewType,
    years,
  } = SettingsMenuHook({
    calendarRef,
    setSlotDuration,
  });

  if (currentMonth === null || currentYear === null || !viewType) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-label="Ajustes" size="icon" variant="ghost">
          <EllipsisVertical />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Calendar1 />
            <span>Seleccionar mes</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={String(months[currentMonth]?.value)}
                onValueChange={(value) => handleMonthChange(Number(value))}
              >
                {months.map(({ label, value }) => (
                  <DropdownMenuRadioItem
                    key={value}
                    value={String(value)}
                    className="capitalize"
                  >
                    {label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Calendar1 />
            <span>Seleccionar año</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={String(currentYear)}
                onValueChange={(value) => handleYearChange(Number(value))}
              >
                {years.map(({ label, value }) => (
                  <DropdownMenuRadioItem
                    key={value}
                    value={String(value)}
                    className="capitalize"
                  >
                    {label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <CalendarPlus />
          <span>Crear cita</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Download />
          <span>Descargar agenda</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showWeekends}
          onCheckedChange={setShowWeekends}
        >
          <span>Mostrar fines de semana</span>
        </DropdownMenuCheckboxItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <CalendarCog />
            <span>Cambiar vista</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={viewType}
                onValueChange={handleViewChange}
              >
                {VIEW_ITEMS.map(({ label, value }) => (
                  <DropdownMenuRadioItem key={value} value={value}>
                    {label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <CalendarClock />
            <span>Duración de franjas</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuRadioGroup
                value={slotDuration}
                onValueChange={handleSlotDurationChange}
              >
                {SLOT_DURATIONS.map(({ label, value }) => (
                  <DropdownMenuRadioItem key={value} value={value}>
                    {label}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { SettingsMenu };
