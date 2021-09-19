<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Myjiro extends Model
{
    use Notifiable;
    
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'image',
    ];
    public function getByLimit(int $limit_count = 3)
    {
        // updated_atで降順に並べたあと、limitで件数制限をかける
        return $this->limit($limit_count)->get();
    }
}
