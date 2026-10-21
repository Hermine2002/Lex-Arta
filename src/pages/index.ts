import type { PageModule } from "./types";
import * as p_home from "./home";
import * as p_about from "./about";
import * as p_book_a_consultation from "./book-a-consultation";
import * as p_contact from "./contact";
import * as p_cookies from "./cookies";
import * as p_disclaimer from "./disclaimer";
import * as p_insights from "./insights";
import * as p_insights_aml_risk_assessment_controls from "./insights-aml-risk-assessment-controls";
import * as p_insights_dora_ict_third_party_register from "./insights-dora-ict-third-party-register";
import * as p_insights_eu_amlr_2027_obliged_entities from "./insights-eu-amlr-2027-obliged-entities";
import * as p_insights_mica_casp_readiness_what_to_check_before_applying from "./insights-mica-casp-readiness-what-to-check-before-applying";
import * as p_insights_mica_in_the_czech_republic_from_casp_licensing_to_active_supervision from "./insights-mica-in-the-czech-republic-from-casp-licensing-to-active-supervision";
import * as p_legal_notice from "./legal-notice";
import * as p_privacy from "./privacy";
import * as p_services from "./services";
import * as p_services_aml_cft from "./services-aml-cft";
import * as p_services_aml_cft_aml_audit_independent_review from "./services-aml-cft-aml-audit-independent-review";
import * as p_services_aml_cft_aml_cft_training from "./services-aml-cft-aml-cft-training";
import * as p_services_aml_cft_aml_gap_analysis from "./services-aml-cft-aml-gap-analysis";
import * as p_services_aml_cft_aml_policies_procedures from "./services-aml-cft-aml-policies-procedures";
import * as p_services_aml_cft_aml_remediation from "./services-aml-cft-aml-remediation";
import * as p_services_aml_cft_enterprise_wide_risk_assessment from "./services-aml-cft-enterprise-wide-risk-assessment";
import * as p_services_aml_cft_fraud_financial_crime_risk from "./services-aml-cft-fraud-financial-crime-risk";
import * as p_services_aml_cft_mlro_compliance_officer_support from "./services-aml-cft-mlro-compliance-officer-support";
import * as p_services_corporate_governance from "./services-corporate-governance";
import * as p_services_corporate_governance_banking_emi_readiness from "./services-corporate-governance-banking-emi-readiness";
import * as p_services_corporate_governance_post_licensing_compliance from "./services-corporate-governance-post-licensing-compliance";
import * as p_services_corporate_governance_trademark_brand_protection from "./services-corporate-governance-trademark-brand-protection";
import * as p_services_data_protection from "./services-data-protection";
import * as p_services_data_protection_data_breach_incident_response from "./services-data-protection-data-breach-incident-response";
import * as p_services_data_protection_dpo_privacy_governance from "./services-data-protection-dpo-privacy-governance";
import * as p_services_data_protection_international_data_transfers from "./services-data-protection-international-data-transfers";
import * as p_services_data_protection_privacy_audit_independent_review from "./services-data-protection-privacy-audit-independent-review";
import * as p_services_data_protection_privacy_documentation_dpas from "./services-data-protection-privacy-documentation-dpas";
import * as p_services_data_protection_privacy_impact_risk_assessments from "./services-data-protection-privacy-impact-risk-assessments";
import * as p_services_legal_regulatory from "./services-legal-regulatory";
import * as p_services_legal_regulatory_ai_governance from "./services-legal-regulatory-ai-governance";
import * as p_services_legal_regulatory_commercial_contracts from "./services-legal-regulatory-commercial-contracts";
import * as p_services_legal_regulatory_international_legal_regulatory from "./services-legal-regulatory-international-legal-regulatory";
import * as p_services_legal_regulatory_legal_opinions_regulatory_memoranda from "./services-legal-regulatory-legal-opinions-regulatory-memoranda";
import * as p_services_legal_regulatory_legal_regulatory_due_diligence from "./services-legal-regulatory-legal-regulatory-due-diligence";
import * as p_services_legal_regulatory_payments_financial_services_regulatory from "./services-legal-regulatory-payments-financial-services-regulatory";
import * as p_services_legal_regulatory_regulatory_perimeter_assessment from "./services-legal-regulatory-regulatory-perimeter-assessment";
import * as p_services_licensing from "./services-licensing";
import * as p_services_licensing_international from "./services-licensing-international";
import * as p_services_licensing_licensing_strategy_jurisdiction_assessment from "./services-licensing-licensing-strategy-jurisdiction-assessment";
import * as p_services_licensing_mica_casp from "./services-licensing-mica-casp";
import * as p_services_licensing_payments_e_money from "./services-licensing-payments-e-money";
import * as p_terms_of_business from "./terms-of-business";
import * as p_terms from "./terms";
import * as p_services_licensing_international_armenia from "./services-licensing-international-armenia";
import * as p_services_licensing_international_canada from "./services-licensing-international-canada";
import * as p_services_licensing_international_el_salvador from "./services-licensing-international-el-salvador";
import * as p_services_licensing_international_mauritius from "./services-licensing-international-mauritius";
import * as p_services_licensing_international_switzerland from "./services-licensing-international-switzerland";
import * as p_services_licensing_international_uae from "./services-licensing-international-uae";

const modules: PageModule[] = [
  p_home,
  p_about,
  p_book_a_consultation,
  p_contact,
  p_cookies,
  p_disclaimer,
  p_insights,
  p_insights_aml_risk_assessment_controls,
  p_insights_dora_ict_third_party_register,
  p_insights_eu_amlr_2027_obliged_entities,
  p_insights_mica_casp_readiness_what_to_check_before_applying,
  p_insights_mica_in_the_czech_republic_from_casp_licensing_to_active_supervision,
  p_legal_notice,
  p_privacy,
  p_services,
  p_services_aml_cft,
  p_services_aml_cft_aml_audit_independent_review,
  p_services_aml_cft_aml_cft_training,
  p_services_aml_cft_aml_gap_analysis,
  p_services_aml_cft_aml_policies_procedures,
  p_services_aml_cft_aml_remediation,
  p_services_aml_cft_enterprise_wide_risk_assessment,
  p_services_aml_cft_fraud_financial_crime_risk,
  p_services_aml_cft_mlro_compliance_officer_support,
  p_services_corporate_governance,
  p_services_corporate_governance_banking_emi_readiness,
  p_services_corporate_governance_post_licensing_compliance,
  p_services_corporate_governance_trademark_brand_protection,
  p_services_data_protection,
  p_services_data_protection_data_breach_incident_response,
  p_services_data_protection_dpo_privacy_governance,
  p_services_data_protection_international_data_transfers,
  p_services_data_protection_privacy_audit_independent_review,
  p_services_data_protection_privacy_documentation_dpas,
  p_services_data_protection_privacy_impact_risk_assessments,
  p_services_legal_regulatory,
  p_services_legal_regulatory_ai_governance,
  p_services_legal_regulatory_commercial_contracts,
  p_services_legal_regulatory_international_legal_regulatory,
  p_services_legal_regulatory_legal_opinions_regulatory_memoranda,
  p_services_legal_regulatory_legal_regulatory_due_diligence,
  p_services_legal_regulatory_payments_financial_services_regulatory,
  p_services_legal_regulatory_regulatory_perimeter_assessment,
  p_services_licensing,
  p_services_licensing_international,
  p_services_licensing_licensing_strategy_jurisdiction_assessment,
  p_services_licensing_mica_casp,
  p_services_licensing_payments_e_money,
  p_terms_of_business,
  p_terms,
  p_services_licensing_international_armenia,
  p_services_licensing_international_canada,
  p_services_licensing_international_el_salvador,
  p_services_licensing_international_mauritius,
  p_services_licensing_international_switzerland,
  p_services_licensing_international_uae,
];

/** Every site page, keyed by its URL path. The page text lives in each page's own .tsx file. */
export const registry: Record<string, PageModule> = Object.fromEntries(
  modules.map((m) => [m.meta.path, m]),
);
