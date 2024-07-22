export function RemoveOnServe(): MethodDecorator {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata("remove-on-serve", true, target, propertyKey);

    }
}