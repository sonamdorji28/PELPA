/* PELPA configuration. Used by BOTH index.html (guests) and admin.html (admin).
   The anon key is meant to be public: the database rules (RLS) protect your data.
   Never put the service_role key or any password in this file. */
window.PELPA_CFG={
  SUPABASE_URL: "https://nhkcrszrlaxnyuiihoab.supabase.co",        // e.g. https://abcdxyz.supabase.co
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5oa2Nyc3pybGF4bnl1aWlob2FiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTUzNTUzNzEsImV4cCI6MjExMDkzMTM3MX0.uNK-t-b5bcBfvmNOZVmtBfsRGxUWM8M2vFooXWg_v9g",   // Settings > API > anon public

  // Admin login: username "Pelpa_Family" maps to this Supabase Auth user
  LOGIN_EMAIL: "sonamdorji11914000599@gmail.com",

  // Public site: contact and payments (the admin Content tab can override the contact details)
  EMAIL: "hello@pelpa.bt",
  PHONE: "+975 17 000 000",
  WHATSAPP: "97517000000",
  DEPOSIT_PCT: 30,
  STRIPE_LINK: "",         // paste a Stripe Payment Link to switch on card checkout
  BANK: {name:"",account_name:"",account_no:"",bank:"",swift:"",note:""},
  WALLET: {label:"mBoB / DK mobile banking",number:"",qr_image:"",note:""}
};
