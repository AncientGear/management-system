

CREATE TABLE IF NOT EXISTS token(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    token TEXT NOT NULL CHECK (token <> '')
);

CREATE TABLE IF NOT EXISTS user(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL CHECK (name <> ''),
    last_name TEXT NOT NULL CHECK (last_name <> ''),
    password TEXT NOT NULL CHECK (password <> ''),
    prefix TEXT NOT NULL CHECK (prefix <> ''),
    email TEXT NOT NULL CHECK (email <> ''),
    token_id INTEGER REFERENCES token(id)
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
    role_id INTEGER FOREIGN KEY REFERENCES role(id),
    user_id INTEGER FOREIGN KEY REFERENCES "user"(id)
);

CREATE TABLE IF NOT EXISTS laboral_information(
    id  INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    company TEXT NOT NULL CHECK(company <> ''),
    position TEXT NOT NULL CHECK(position <> ''),
    period TEXT NOT NULL CHECK(period <> ''),
    score INTEGER
);

CREATE TABLE IF NOT EXISTS laboral_experience(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY
);

CREATE TABLE IF NOT EXISTS laboral_experience_information(
    laboral_information_id INTEGER FOREIGN KEY REFERENCES laboral_information(id),
    laboral_experience_id INTEGER FOREIGN KEY REFERENCES laboral_experience(id),
);

CREATE TABLE IF NOT EXISTS education(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY
    max_level_academic TEXT NOT NULL CHECK( max_level_academic <> ''),
    institute TEXT NOT NULL CHECK( institute <> ''),
    date TEXT NOT NULL CHECK( date <> ''),
    score INTEGER
);

CREATE TABLE IF NOT EXISTS quality_management_experience(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    company TEXT NOT NULL CHECK( company <> ''),
    position TEXT NOT NULL CHECK( position <> ''),
    period TEXT NOT NULL CHECK( period <> ''),
    score INTEGER
);

CREATE TABLE IF NOT EXISTS information_as_auditor_info(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    course_name TEXT NOT NULL CHECK( course_name <> ''),
    date TEXT NOT NULL CHECK( date <> ''),
    score INTEGER
);

CREATE TABLE IF NOT EXISTS formation_as_auditor(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY
);

CREATE TABLE IF NOT EXISTS formation_info(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    formation_as_auditor_id INTEGER FOREIGN KEY REFERENCES formation_as_auditor(id),
    formation_as_auditor_info INTEGER FOREIGN KEY REFERENCES formation_as_auditor_info(id)
);

CREATE TABLE IF NOT EXISTS audit_info(
    id PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    appoitment DATETIME,
    date TEXT NOT NULL CHECK( date <> ''),
    score INTEGER
);

CREATE TABLE IF NOT EXISTS audit_experience(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY
);

CREATE TABLE IF NOT EXISTS audit_experience_info(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    audit_experience_id INTEGER FOREIGN KEY REFERENCES audit_experience(id),
    audit_experience_info INTEGER FOREIGN KEY REFERENCES audit_experience(id)
);

CREATE TABLE IF NOT EXISTS audit_cal(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    date TEXT NOT NULL CHECK( date <> ''),
    total_score INTEGER,
    quality_management_experience id INTEGER REFERENCES quality_management_experience(id),
    formation_as_auditor_id INTEGER REFERENCES formation_as_auditor(id),
    audit_experience_id INTEGER REFERENCES audit_experience(id),
    qualify_by_id INTEGER,
    score_date_limit INTEGER,
    role_id INTEGER FOREIGN KEY REFERENCES role(id),
    user_id INTEGER FOREIGN KEY REFERENCES user(id),
    education_id FOREIGN KEY INTEGER REFERENCES education(id),
    laboral_experience_id FOREIGN KEY INTEGER REFERENCES laboral_experience(id)
);
