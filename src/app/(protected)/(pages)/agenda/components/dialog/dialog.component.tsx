// Vendors
import { es } from "react-day-picker/locale";
// Components
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Dialog as DialogComponent,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
// Hooks
import { DialogHook } from "./hooks/dialog.hook";
// Types
import type { DialogProps } from "./types/dialog.component.types";

import { DateTimePicker } from "@/components/ui/date-time-picker";

const Dialog = ({ form, open, setOpen }: DialogProps) => {
  const { handleEndDateSelect, handleStartDateSelect, handleSubmit, loading } =
    DialogHook({
      form,
    });

  return (
    <DialogComponent open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Crear cita</DialogTitle>
          <DialogDescription>
            Rellena los campos para crear una nueva cita
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            id="appointment-form"
            onSubmit={form.handleSubmit(handleSubmit)}
            className="flex flex-col gap-6 px-4 sm:px-6"
          >
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 sm:flex-row">
                <FormField
                  control={form.control}
                  name="start"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel htmlFor="start">Inicio</FormLabel>
                      <FormControl>
                        <DateTimePicker
                          disabled={loading}
                          locale={es}
                          onSelect={handleStartDateSelect}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="end"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel htmlFor="end">Fin</FormLabel>
                      <FormControl>
                        <DateTimePicker
                          disabled={loading}
                          locale={es}
                          onSelect={handleEndDateSelect}
                          value={field.value}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancelar
            </Button>
          </DialogClose>
          <ButtonLoading
            disabled={loading}
            form="appointment-form"
            label="Crear"
            loading={loading}
            showLabel={false}
            type="submit"
          />
        </DialogFooter>
      </DialogContent>
    </DialogComponent>
  );
};

export { Dialog };
