'use strict';

const { Pool } = require('pg');

let DBPool;

/*
 * This is a self-invoking function
 * for creating sql tables
 */

// const createTables = () => {
// 	const query = `

//     CREATE TABLE IF NOT EXISTS public.product (
// 	product_key serial4 NOT NULL,
// 	brand_name varchar(25) NULL,
// 	generic_name varchar(50) NULL,
// 	menarini_owned_commercial_rights varchar(1000) NULL,
// 	menarini_territory_source varchar(500) NULL,
// 	other_owned_commercial_rights varchar(300) NULL,
// 	other_territory_source varchar(500) NULL,
// 	product_attributes varchar(1000) NULL,
// 	product_attributes_source varchar(500) NULL,
// 	functional_benefits varchar(700) NULL,
// 	functional_benefits_source varchar(500) NULL,
// 	emotional_benefits varchar(500) NULL,
// 	emotional_benefits_source varchar(500) NULL,
// 	strengths varchar(1000) NULL,
// 	weaknesses varchar(1000) NULL,
// 	upsides varchar(1000) NULL,
// 	downsides varchar(1000) NULL,
// 	opportunities varchar(1000) NULL,
// 	threats varchar(1000) NULL,
// 	mission varchar(500) NULL,
// 	vision varchar(4000) NULL,
// 	value varchar(500) NULL,
// 	hcp_channels varchar(250) NULL,
// 	CONSTRAINT product_pkey PRIMARY KEY (product_key)
// );

// CREATE TABLE IF NOT EXISTS public.indications (
// 	indication_key serial4 NOT NULL,
// 	product_key int4 NULL,
// 	product_id varchar(6) NULL,
// 	brand_name varchar(25) NULL,
// 	generic_name varchar(50) NULL,
// 	home_brand_name varchar(25) NULL,
// 	indications varchar(1000) NULL,
// 	indication_desc varchar(300) NULL,
// 	indication_adv varchar(500) NULL,
// 	indication_disadv varchar(2000) NULL,
// 	is_competitor bool NULL,
// 	primary_competitor varchar(500) NULL,
// 	secondary_competitor varchar(500) NULL,
// 	therapy_area varchar(100) NULL,
// 	moa varchar(250) NULL,
// 	dosing_freq varchar(250) NULL,
// 	dosing_freq_adv varchar(250) NULL,
// 	dosing_freq_disadv varchar(250) NULL,
// 	contradictions_warnings varchar(2000) NULL,
// 	interactions varchar(3000) NULL,
// 	aes_undesirable_effects varchar(1000) NULL,
// 	aes_undesirable_effects_adv varchar(500) NULL,
// 	aes_undesirable_effects_disadv varchar(600) NULL,
// 	shelf_life varchar(500) NULL,
// 	shelf_life_adv varchar(100) NULL,
// 	shelf_life_disadv varchar(100) NULL,
// 	"storage" varchar(300) NULL,
// 	storage_adv varchar(300) NULL,
// 	storage_disadv varchar(300) NULL,
// 	available_sku varchar(300) NULL,
// 	product_label_source varchar(500) NULL,
// 	first_launched_location varchar(30) NULL,
// 	first_launched_date varchar(10) NULL,
// 	first_launch_company_name varchar(50) NULL,
// 	future_new_launches_expected varchar(50) NULL,
// 	loe varchar(200) NULL,
// 	first_launch_source varchar(500) NULL,
// 	indications_currently_approved varchar(300) NULL,
// 	new_indication_development bool NULL,
// 	indication_source varchar(500) NULL,
// 	clinical_efficacy_and_safety varchar(2000) NULL,
// 	clinical_efficacy_and_safety_source varchar(500) NULL,
// 	prevalence_global varchar(500) NULL,
// 	prevalence_global_source varchar(300) NULL,
// 	incidence_global varchar(500) NULL,
// 	incidence_global_source varchar(300) NULL,
// 	prevalence_us varchar(500) NULL,
// 	prevalence_us_source varchar(300) NULL,
// 	incidence_us varchar(500) NULL,
// 	incidence_us_source varchar(300) NULL,
// 	prevalence_eu varchar(2000) NULL,
// 	prevalence_eu_source varchar(1000) NULL,
// 	incidence_eu varchar(2000) NULL,
// 	incidence_eu_source varchar(2000) NULL,
// 	physical_disease_burden varchar(1000) NULL,
// 	physical_disease_burden_source varchar(500) NULL,
// 	social_disease_burden varchar(1000) NULL,
// 	social_disease_burden_source varchar(300) NULL,
// 	unmet_needs varchar(1000) NULL,
// 	unmet_needs_source varchar(500) NULL,
// 	treatment_guidelines varchar(500) NULL,
// 	treatment_guidelines_source varchar(1500) NULL,
// 	pathology varchar(1500) NULL,
// 	pathology_source varchar(1500) NULL
// );

// CREATE TABLE IF NOT EXISTS public.past_performance (
// 	product_key int4 NOT NULL,
// 	indication_key varchar(6) NOT NULL,
// 	current_year int4 NOT NULL,
// 	sale varchar(15) NULL,
// 	current_operating_margin_and_change varchar(10) NULL,
// 	current_market_share_change varchar(10) NULL,
// 	CONSTRAINT past_performance_pkey PRIMARY KEY (product_key, indication_key, current_year)
// );

// CREATE TABLE IF NOT EXISTS public.future_financial_goals (
// 	product_key int4 NOT NULL,
// 	indication_key varchar(6) NOT NULL,
// 	"year" int4 NOT NULL,
// 	sales_goals_in_euros varchar(15) NULL,
// 	operating_margin_goals varchar(10) NULL,
// 	market_share_goals varchar(10) NULL,
// 	CONSTRAINT future_financial_goals_pkey PRIMARY KEY (product_key, indication_key, year)
// );

// CREATE TABLE IF NOT EXISTS public.barrier_identification (
// 	bi_key serial4 NOT NULL,
// 	product_key int4 NULL,
// 	segments varchar(200) NULL,
// 	focus varchar(100) NULL,
// 	need varchar(300) NULL,
// 	desired_thinking varchar(500) NULL,
// 	desired_actions varchar(800) NULL,
// 	barriers_to_achieve_bo varchar(300) NULL,
// 	driver_to_achieve_bo varchar(300) NULL,
// 	engagement_objectives varchar(500) NULL,
// 	key_messages varchar(300) NULL,
// 	physical_engagement varchar(300) NULL,
// 	push_online_engagement varchar(300) NULL,
// 	pull_online_engagement varchar(300) NULL
// );
// CREATE TABLE IF NOT EXISTS public."guidelines"
// (
//     guidelines_id integer NOT NULL,
//     product_id integer NOT NULL,
//     spec_id integer NOT NULL,
//     mode_id character varying COLLATE pg_catalog."default" NOT NULL,
//     mode_type character varying COLLATE pg_catalog."default" NOT NULL,
//     CONSTRAINT "guidelines_pkey" PRIMARY KEY (guidelines_id)
// );

// CREATE TABLE IF NOT EXISTS public."guideline_flow"
// (
//     guideline_flow_id integer NOT NULL,
//     guidelines_id integer NOT NULL,
//     guidelines_parent_id integer,
//     product_id integer NOT NULL,
//     spec_id integer NOT NULL,
//     level integer NOT NULL,
//     sort_order integer NOT NULL,
//     CONSTRAINT "guideline_flow_pkey" PRIMARY KEY (guideline_flow_id)
// );
//     `;
// 	this.executeQuery(query);
// };

/*
 * This is a self-invoking function
 * for connecting sql to the database
 */
// exports.DBConnect = async () => {
// 	try {
// 		const config = {
// 			host: APP_DATA.CONFIG.DB_SERVER_IP,
// 			port: APP_DATA.CONFIG.DB_SERVER_PORT,
// 			database: APP_DATA.CONFIG.DB_DATABASE,
// 			user: APP_DATA.CONFIG.DB_USER,
// 			password: APP_DATA.CONFIG.DB_PASSWORD,
// 		};

// 		DBPool = await new Pool(config);

// 		//await createTables();
// 		/* eslint-disable no-console */
// 		console.log('DB Connected & API is up and running ...');
// 	} catch (err) {
// 		/* eslint-disable no-console */
// 		console.error(err);
// 	}
// };

const snowflake = require('snowflake-sdk');

// Create the Snowflake connection
const connection = snowflake.createConnection({
  account: APP_DATA.CONFIG.ACCOUNT,
  username: APP_DATA.CONFIG.USER,
  password: APP_DATA.CONFIG.PASSWORD,
  database: APP_DATA.CONFIG.DB_DATABASE,
  warehouse: APP_DATA.CONFIG.WAREHOUSE,
  role: APP_DATA.CONFIG.ROLE
});

// Function to connect to Snowflake
exports.connectToSnowflake = async () => {
  return new Promise((resolve, reject) => {
    connection.connect((err, conn) => {
      if (err) {
        console.error('Unable to connect: ' + err.message);
        reject(err);
      } else {
        console.log('Successfully connected as id: ' + connection.getId());
        resolve(conn);
      }
    });
  });
};

// Function to execute a query
exports.executeQuery = async (query) => {
  try {
    return new Promise((resolve, reject) => {
      connection.execute({
        sqlText: query,
        complete: (err, stmt, rows) => {
          if (err) {
            reject('Failed to execute statement due to the following error: ' + err.message);
          } else {
            resolve(rows);
          }
        }
      });
    });
  } catch (error) {
    throw new Error(error);
  }
};
