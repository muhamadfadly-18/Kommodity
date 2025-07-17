<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFormFieldsToOrdersSamplesTable extends Migration
{
    public function up()
    {
        Schema::table('orders_sample', function (Blueprint $table) {
            $table->string('email')->nullable();
            $table->string('country')->nullable();
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('address')->nullable();
            $table->string('office')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('postal_code')->nullable();
            $table->string('phone')->nullable();
            $table->integer('sample_qty')->nullable();
        });
    }

    public function down()
    {
        Schema::table('orders_sample', function (Blueprint $table) {
            $table->dropColumn([
                'email',
                'country',
                'first_name',
                'last_name',
                'address',
                'office',
                'city',
                'province',
                'postal_code',
                'phone',
                'sample_qty',
            ]);
        });
    }
}

