import {ValidationRules } from 'aurelia-validation';

export class CustomerValidationRules {


  getRules(customer) {
    return   ValidationRules
        .ensure('CustomerID').displayName('Customer ID')
          .required()
          .minLength(3)
        .ensure('ContactName').displayName('Contact Name')
          .required()
          .minLength(3)
        .ensure('CompanyName').displayName('Company Name')
          .required()
          .withMessage(`\${$displayName} is required.`)
          .minLength(3)
        .ensure('Address').required()            
        .ensure('PostalCode').displayName("Postal Code")
            .required()
            .withMessage(`\${$displayName} is required`)
            .minLength(5)
        .ensure('Phone').required()
            .matches(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/)
            .withMessage(`\${$value} is not a valid Phone Number`)
        .on(customer);
  }
}
