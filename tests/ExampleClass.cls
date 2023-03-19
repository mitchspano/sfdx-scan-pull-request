@IsTest
private class ExampleClass {
  @IsTest
  static void itHasNoAsserts() {
    // should throw a scanner violation!
  }

  @IsTest
  static void anotherNoAssertMethod() {
  }
}