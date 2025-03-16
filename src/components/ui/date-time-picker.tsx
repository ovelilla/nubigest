// Vendors
import { cn } from "@/lib/utils";
import { format } from "date-fns";
// Components
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
// Icons
import { Calendar as CalendarIcon } from "lucide-react";
// Types
import type { Locale } from "react-day-picker";

type DateTimePickerTriggerProps = Omit<
  React.ComponentProps<"button">,
  "value"
> & {
  value?: Date;
};

const DateTimePickerTrigger = ({
  disabled,
  value,
  ...props
}: DateTimePickerTriggerProps) => {
  return (
    <Button
      disabled={disabled}
      variant="outline"
      type="button"
      className={cn(
        "w-full px-3 text-left font-normal hover:bg-transparent",
        !value && "text-muted-foreground hover:text-muted-foreground",
      )}
      {...props}
    >
      {value ? (
        format(value, "MM/dd/yyyy HH:mm")
      ) : (
        <span>MM/DD/YYYY HH:mm</span>
      )}
      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
    </Button>
  );
};

type HoursPickerProps = {
  value: Date | undefined;
  onSelect: (date: Date) => void;
};

const HoursPicker = ({ value, onSelect }: HoursPickerProps) => {
  const hours = Array.from({ length: 24 }, (_, i) => i);

  function handleHourChange(hour: number) {
    const newValue = new Date(value || new Date());
    newValue.setHours(hour);

    onSelect(newValue);
  }

  return (
    <ScrollArea className="w-64 sm:w-auto">
      <div className="flex p-2 sm:flex-col">
        {hours.map((hour) => (
          <Button
            key={hour}
            type="button"
            variant={value && value.getHours() === hour ? "default" : "ghost"}
            className="h-9 w-9 p-0 font-normal"
            onClick={() => handleHourChange(hour)}
          >
            {hour.toString().padStart(2, "0")}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="sm:hidden" />
    </ScrollArea>
  );
};

type MinutesPickerProps = {
  value: Date | undefined;
  onSelect: (date: Date) => void;
};

const MinutesPicker = ({ value, onSelect }: MinutesPickerProps) => {
  const minutes = Array.from({ length: 12 }, (_, i) => i * 5);

  function handleMinuteChange(minute: number) {
    const newValue = new Date(value || new Date());
    newValue.setMinutes(minute);

    onSelect(newValue);
  }

  return (
    <ScrollArea className="w-64 sm:w-auto">
      <div className="flex p-2 sm:flex-col">
        {minutes.map((minute) => (
          <Button
            key={minute}
            type="button"
            variant={
              value && value.getMinutes() === minute ? "default" : "ghost"
            }
            className="h-9 w-9 p-0 font-normal"
            onClick={() => handleMinuteChange(minute)}
          >
            {minute.toString().padStart(2, "0")}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="sm:hidden" />
    </ScrollArea>
  );
};

type DateTimePickerProps = {
  disabled?: boolean;
  locale?: Locale;
  onSelect: (date: Date) => void;
  value: Date | undefined;
};

const DateTimePicker = ({
  disabled,
  locale,
  onSelect,
  value,
}: DateTimePickerProps) => {
  function handleDateSelect(date: Date | undefined) {
    const newValue = new Date(value || new Date());

    if (date) {
      newValue.setFullYear(date.getFullYear());
      newValue.setMonth(date.getMonth());
      newValue.setDate(date.getDate());
    }

    onSelect(newValue);
  }

  return (
    <Popover modal={true}>
      <PopoverTrigger asChild>
        <DateTimePickerTrigger value={value} disabled={disabled} />
      </PopoverTrigger>

      <PopoverContent className="z-150 w-auto p-0" align="start">
        <div className="sm:flex">
          <Calendar
            locale={locale}
            mode="single"
            selected={value}
            onSelect={handleDateSelect}
          />
          <div className="flex flex-col divide-y sm:h-[304px] sm:flex-row sm:divide-x sm:divide-y-0">
            <HoursPicker value={value} onSelect={onSelect} />
            <MinutesPicker value={value} onSelect={onSelect} />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export { DateTimePicker, DateTimePickerTrigger };
