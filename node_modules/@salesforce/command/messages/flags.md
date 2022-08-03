# flags.json.description

format output as json

# flags.json.description.long

Format output as JSON.

# flags.loglevel.description

logging level for this command invocation

# flags.loglevel.description.long

The logging level for this command invocation. Logs are stored in $HOME/.sf/sf.log.

# flags.apiversion.description

override the api version used for api requests made by this command

# flags.apiversion.description.long

Override the API version used for API requests made by this command.

# flags.verbose.description

emit additional command output to stdout

# flags.verbose.description.long

Emit additional command output to stdout.

# flags.concise.description

emit brief command output to stdout

# flags.long.description.long

Emit brief command output to stdout.

# flags.quiet.description

nothing emitted stdout

# flags.quiet.description.long

Command does not output to stdout.

# flags.targetusername.description

username or alias for the target org; overrides default target org

# flags.targetusername.description.long

A username or alias for the target org. Overrides the default target org.

# flags.targetdevhubusername.description

username or alias for the dev hub org; overrides default dev hub org

# flags.targetdevhubusername.description.long

A username or alias for the target Dev Hub org. Overrides the default Dev Hub org.

# error.InvalidApiVersion

The API version '%s' is not valid. Must be in the format, 'i.0'

# error.InvalidFlagType

The flag value "%s" is not in the correct format for "%s."%s

# error.InvalidLongDescriptionFormat

The flag %s's longDescription attribute must be a string.

# error.UnknownFlag

Cannot enable unknown flag: %s

# error.UnknownBuiltinFlagType

No built-in flag named '%s'.

# error.MissingOrInvalidFlagDescription

The flag %s is missing the description attribute, or the description is not a string.

# error.InvalidFlagChar

The flag %s's char attribute must be one alphabetical character long.

# error.InvalidFlagName

The flag %s's name must be a lowercase string that may contain numbers and hyphens.

# error.FormattingMessageArrayValue

Must only contain valid values.

# error.FormattingMessageArrayOption

Must only contain values in [%s].

# error.FormattingMessageDate

Must be parsable by the Javascript Date object.

# error.FormattingMessageId

Must be a 15- or 18-char string in the format "00Dxxxxxxxxxxxx", where "00D" is a valid sObject prefix.

# error.FormattingMessageId

Must be a valid url in the format "http://salesforce.com". See https://nodejs.org/api/url.html#url_url_strings_and_url_object

# error.InvalidLoggerLevel

You specified an invalid log level. Try one of these: TRACE, DEBUG, INFO, WARN, ERROR, FATAL.
