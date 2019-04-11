import store from 'app/store';

export function mapActions(module, actionMappings) {
  return Object.entries(actionMappings).reduce((mappedActions, actionMapping) => {
    const [functionName, actionName] = actionMapping;
    return Object.assign(mappedActions, {
      [functionName]: payload => {
        store.dispatch(`${module}/${actionName}`, payload);
      },
    });
  }, {})
}

export function mapGetters(module, getterMappings) {
  return Object.entries(getterMappings).reduce((mappedGetters, getterMapping) => {
    const [fieldName, getterName] = getterMapping;
    return Object.assign(mappedGetters, {
      [fieldName]: store.getters[`${module}/${getterName}`],
    });
  }, {})
}
