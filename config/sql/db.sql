

CREATE TABLE IF NOT EXISTS "user"(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),
    last_name TEXT NOT NULL CHECK (last_name <> ''),
    password TEXT NOT NULL CHECK (password <> ''),
    prefix TEXT NOT NULL CHECK (prefix <> ''),
    email TEXT UNIQUE NOT NULL CHECK (email <> ''),
    token TEXT
);

CREATE TABLE IF NOT EXISTS area(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    area_name TEXT NOT NULL CHECK (area_name <> ''),
    abbreviation TEXT NOT NULL CHECK (abbreviation <> ''),
    responsable_id INTEGER REFERENCES "user"(id)
);

CREATE TABLE IF NOT EXISTS activities_programm_annual(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    activity_name TEXT NOT NULL CHECK (activity_name <> ''),
    enumeration TEXT NOT NULL CHECK (enumeration <> ''),
    start_week INTEGER,
    end_week INTEGER
);

CREATE TABLE IF NOT EXISTS annual_programm(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    title TEXT NOT NULL CHECK (title <> ''),
    total_weeks INTEGER,
    month_start TEXT NOT NULL CHECK (month_start <> ''),
    month_end TEXT NOT NULL CHECK (month_end <> '')
);

CREATE TABLE IF NOT EXISTS annual_programm_activities (
    annual_programm_id INTEGER REFERENCES annual_programm(id),
    activities_programm_annual_id INTEGER REFERENCES activities_programm_annual(id)
);

CREATE TABLE IF NOT EXISTS responsable(
    activities_programm_annual_id INTEGER REFERENCES activities_programm_annual(id),
    area_responsable_id INTEGER REFERENCES "user"(id)
);

CREATE TABLE IF NOT EXISTS role(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> '')
);

CREATE TABLE IF NOT EXISTS user_roles(
    role_id INTEGER REFERENCES role(id),
    user_id INTEGER REFERENCES "user"(id)
);

CREATE TABLE IF NOT EXISTS laboral_information(
    
);
