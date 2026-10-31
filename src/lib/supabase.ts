import { createClient } from "@supabase/supabase-js";

export const SUPABASE_URL = "https://csygqddvuaivkraxorth.supabase.co";
export const SUPABASE_ANON_KEY = "sb_publishable_jVz32GHQxRc5Wi70VlicFg_FRNTIQdO";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export interface SupabaseAppointmentPayload {
  patient_name: string;
  phone: string;
  age?: number;
  city?: string;
  department: string;
  treatment?: string | null;
  appointment_date: string;
  appointment_time: string;
  status?: string;
}
