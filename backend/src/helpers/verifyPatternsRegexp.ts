/**
 *
 * This regexp allow password contain at least one small and big character, one digit and one special character.
 * Minimum 8 characters, maximum 64.Allowed special characters ! @ # $ % ^ & * ( )
 *
 * TODO add space to allowed characters in regexp
 */
export const passwordVerificationPattern =
  /^(?=.*\d)(?=.*[a-z])(?=.*[\!\@\#\$\%\^\&\*\(\)])(?=.*[A-Z])(?!.*\s).{8,64}$/g;
