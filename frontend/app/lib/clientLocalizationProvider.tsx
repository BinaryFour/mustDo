"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

type ClientLocalizationProviderProps = {
  children: React.ReactNode;
};

const ClientLocalizationProvider = ({
  children,
}: ClientLocalizationProviderProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
};

export default ClientLocalizationProvider;
