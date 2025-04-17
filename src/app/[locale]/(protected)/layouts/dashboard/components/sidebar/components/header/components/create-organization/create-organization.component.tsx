// Components
import { Button } from "@/components/ui/button";
import { ButtonLoading } from "@/components/ui/button-loading";
import {
  Dialog,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Hooks
import { CreateOrganizationHook } from "./hooks/create-organization.hook";
// Types
import type { CreateOrganizationProps } from "./types/create-organization.component.types";

const CreateOrganization = ({
  openDialog,
  setOpenDialog,
}: CreateOrganizationProps) => {
  const { form, handleOpenChange, handleSubmit, loading, t } =
    CreateOrganizationHook({
      setOpenDialog,
    });

  return (
    <Dialog open={openDialog} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{t("ui.dialog.title")}</DialogTitle>
          <DialogDescription>{t("ui.dialog.description")}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col gap-6 px-4 sm:px-6"
            id="create-organization-form"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>
                      {t("ui.form.name.label")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={loading}
                        id={field.name}
                        placeholder={t("ui.form.name.placeholder")}
                        type="text"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor={field.name}>
                      {t("ui.form.description.label")}
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={loading}
                        id={field.name}
                        placeholder={t("ui.form.description.placeholder")}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </form>
        </Form>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              {t("ui.dialog.buttons.cancel.label")}
            </Button>
          </DialogClose>
          <ButtonLoading
            disabled={loading}
            form="create-organization-form"
            loading={loading}
            type="submit"
          >
            {t("ui.form.buttons.submit.label")}
          </ButtonLoading>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { CreateOrganization };
