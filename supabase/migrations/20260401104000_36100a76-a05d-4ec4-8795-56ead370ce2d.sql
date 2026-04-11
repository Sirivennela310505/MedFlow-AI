
CREATE TABLE public.symptom_checks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  symptoms TEXT NOT NULL,
  age INTEGER NOT NULL,
  duration TEXT NOT NULL,
  severity INTEGER NOT NULL,
  priority TEXT NOT NULL DEFAULT 'LOW',
  department TEXT NOT NULL DEFAULT 'General Medicine',
  description TEXT,
  action TEXT,
  confidence INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.symptom_checks ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Patients can create own symptom checks"
  ON public.symptom_checks FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Patients can view own symptom checks"
  ON public.symptom_checks FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id OR has_role(auth.uid(), 'doctor') OR has_role(auth.uid(), 'admin'));
