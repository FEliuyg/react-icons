export function getComponentType(componentName) {
  let type = "outlined";
  if (componentName.endsWith("Filled")) {
    type = "filled";
  } else if (componentName.endsWith("Colored")) {
    type = "colored";
  }

  return type;
}
