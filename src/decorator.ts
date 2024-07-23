import 'reflect-metadata';
 
export function RemoveOnServe(): MethodDecorator {
    return (target, propertyKey) => {
        Reflect.defineMetadata('remove-on-serve', true, target, propertyKey);

    };
}