# PELPA on GitHub Pages

Files: `index.html` (guest site), `admin.html` (admin), `config.js` (keys), `pelpa_supabase_setup.sql`.

1. Supabase: create a project. SQL Editor -> paste `pelpa_supabase_setup.sql` -> Run.
2. Supabase: Authentication -> Users -> Add user. Email `pelpa_family@pelpa.bt`, your admin password, tick Auto confirm.
3. Supabase: Settings -> API. Copy Project URL and anon public key into `config.js`.
4. GitHub: create a repository, upload all four files to the root, then Settings -> Pages -> Deploy from branch -> main / root.
5. Guest site: `https://<you>.github.io/<repo>/`. Admin: `https://<you>.github.io/<repo>/admin.html`. Sign in as `Pelpa_Family`.
6. Admin -> Setup -> "Import starter journeys" so you can edit the built-in tours.

Security: the anon key is public by design. Data is protected by the database rules; only the admin account can read bookings or change anything. Keep the repository free of passwords and the service_role key.
