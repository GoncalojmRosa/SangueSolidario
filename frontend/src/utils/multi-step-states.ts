import {
  CalendarSearchIcon,
  InfoIcon,
  MapPinnedIcon,
  SaveIcon,
} from "lucide-react";
import { LoadingState } from "@/components/ui/multi-step-loader";

export const loadingStatesCampaigns: LoadingState[] = [
  {
    text: "Verificando elegibilidade",
    icon: InfoIcon,
  },
  {
    text: "Verificando disponibilidade de horário",
    icon: CalendarSearchIcon,
  },
  {
    text: "Registando informações",
    icon: SaveIcon,
  },
  {
    text: "Preparando o local de doação",
    icon: MapPinnedIcon,
  },
];

export const loadingStatesPerfil: LoadingState[] = [
  {
    text: "Verificando elegibilidade",
    icon: InfoIcon,
  },
  {
    text: "Verificando disponibilidade de horário",
    icon: CalendarSearchIcon,
  },
  {
    text: "Registando informações",
    icon: SaveIcon,
  },
  {
    text: "Preparando o local de doação",
    icon: MapPinnedIcon,
  },
];
