DROP POLICY IF EXISTS "Anyone can submit a contact message" ON public.contact_submissions;

CREATE POLICY "Anyone can submit a contact message"
ON public.contact_submissions
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 200
  AND length(email) BETWEEN 3 AND 320
  AND (message IS NULL OR length(message) <= 5000)
  AND (phone IS NULL OR length(phone) <= 30)
  AND (organization IS NULL OR length(organization) <= 200)
  AND (role IS NULL OR role IN ('Werkgever / HR', 'Medewerker of particulier', 'Via UWV', 'Anders'))
);