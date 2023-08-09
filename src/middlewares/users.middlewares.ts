import exp from 'constants'
import { Request, Response, NextFunction } from 'express'
import { checkSchema } from 'express-validator'
import usersService from '~/services/users.services'
import { validate } from '~/utils/validation'
export const loginValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body
  if (!email || !password) {
    res.status(400).send('Missing username or password')
  } else {
    next()
  }
}

export const registerValidation = validate(
  checkSchema({
    name: {
      isString: true,
      notEmpty: true,
      isLength: {
        options: { min: 1, max: 100 }
      },
      trim: true
    },
    email: {
      notEmpty: true,
      isEmail: true,
      trim: true,
      custom: {
        options: async (value) => {
          const isExistEmail = await usersService.checkEmailExist(value)
          if (isExistEmail) {
            throw new Error('Email already exists')
          }
          return true
        }
      }
    },

    password: {
      isString: true,
      notEmpty: true,
      isLength: {
        options: { min: 6, max: 50 }
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        }
      },
      errorMessage:
        'Password must be at least 6 characters long, and contain at least 1 lowercase, 1 uppercase, 1 number and 1 symbol'
    },
    confirm_password: {
      isString: true,
      notEmpty: true,
      isLength: {
        options: { min: 6, max: 50 }
      },
      isStrongPassword: {
        options: {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 1,
          minNumbers: 1,
          minSymbols: 1
        },
        errorMessage:
          'Password must be at least 6 characters long, and contain at least 1 lowercase, 1 uppercase, 1 number and 1 symbol'
      },
      custom: {
        options: (value, { req }) => {
          if (value !== req.body.password) {
            throw new Error('Password confirmation does not match password')
          } else {
            return true
          }
        }
      }
    },
    date_of_birth: {
      isISO8601: {
        options: {
          strict: true,
          strictSeparator: true
        }
      }
    }
  })
)
