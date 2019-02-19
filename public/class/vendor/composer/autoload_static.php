<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit0ab1a002522856c25f4e2447dbf76b4c
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit0ab1a002522856c25f4e2447dbf76b4c::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit0ab1a002522856c25f4e2447dbf76b4c::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
